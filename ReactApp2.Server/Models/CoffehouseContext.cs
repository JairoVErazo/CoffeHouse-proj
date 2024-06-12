﻿using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace CoffeHouse.Server.Models;

public partial class CoffehouseContext : DbContext
{
    public CoffehouseContext()
    {
    }

    public CoffehouseContext(DbContextOptions<CoffehouseContext> options)
        : base(options)
    {
    }

    public virtual DbSet<CategoriaProducto> CategoriaProductos { get; set; }

    public virtual DbSet<DetalleOrden> DetalleOrden { get; set; }

    public virtual DbSet<DetalleRecetum> DetalleReceta { get; set; }

    public virtual DbSet<EstadoOrden> EstadoOrdens { get; set; }

    public virtual DbSet<Factura> Facturas { get; set; }

    public virtual DbSet<Ingrediente> Ingredientes { get; set; }

    public virtual DbSet<MetodoPago> MetodoPagos { get; set; }

    public virtual DbSet<Orden> Orden { get; set; }

    public virtual DbSet<PedidoIngrediente> PedidoIngredientes { get; set; }

    public virtual DbSet<Producto> Productos { get; set; }

    public virtual DbSet<Receta> Recetas { get; set; }

    public virtual DbSet<Role> Roles { get; set; }

    public virtual DbSet<Usuario> Usuarios { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see https://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseSqlServer("Server=DESKTOP-5SK7M5O; Database=COFFEHOUSE; Trusted_Connection=True; TrustServerCertificate=true;");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<CategoriaProducto>(entity =>
        {
            entity.HasKey(e => e.IdCategoria);

            entity.ToTable("CategoriaProducto");

            entity.Property(e => e.NombreCategoria)
                .HasMaxLength(50)
                .IsUnicode(false);
        });

        modelBuilder.Entity<DetalleOrden>(entity =>
        {

            entity.HasKey(d => new { d.IdReceta, d.IdOrden });

            entity.Property(e => e.PrecioTotal).HasColumnType("money");


            entity.HasOne(d => d.IdOrdenNavigation)
                .WithMany()
                .HasForeignKey(d => d.IdOrden)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_DetalleOrden_Orden");


            entity.HasOne(d => d.IdRecetaNavigation)
                .WithMany()
                .HasForeignKey(d => d.IdReceta)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_DetalleOrden_Recetas");
        });

        modelBuilder.Entity<DetalleRecetum>(entity =>
        {
            entity
                .HasNoKey()
                .ToTable(tb =>
                {
                    tb.HasTrigger("trg_ActualizarCostoTotalReceta");
                    tb.HasTrigger("trg_CalcularCostoPorPorcion");
                });

            entity.Property(e => e.CantidadUnidades).HasColumnType("decimal(18, 0)");
            entity.Property(e => e.CostoPerPorcion).HasColumnType("money");

            entity.HasOne(d => d.IdIngredienteNavigation).WithMany()
                .HasForeignKey(d => d.IdIngrediente)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_DetalleReceta_Ingredientes");

            entity.HasOne(d => d.IdRecetasNavigation).WithMany()
                .HasForeignKey(d => d.IdRecetas)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_DetalleReceta_Recetas");
        });

        modelBuilder.Entity<EstadoOrden>(entity =>
        {
            entity.HasKey(e => e.IdEstado);

            entity.ToTable("EstadoOrden");

            entity.Property(e => e.Estado)
                .HasMaxLength(50)
                .IsUnicode(false);
        });

        modelBuilder.Entity<Factura>(entity =>
        {
            entity.HasKey(e => e.IdFactura);

            entity.ToTable("Factura");

            entity.Property(e => e.IdMetodopago).HasColumnName("id_metodopago");
            entity.Property(e => e.Total).HasColumnType("money");

            entity.HasOne(d => d.IdMetodopagoNavigation).WithMany(p => p.Facturas)
                .HasForeignKey(d => d.IdMetodopago)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_Factura_MetodoPago");
        });

        modelBuilder.Entity<Ingrediente>(entity =>
        {
            entity.HasKey(e => e.IdIngrediente);

            entity.ToTable(tb => tb.HasTrigger("trg_ActualizarCostoPorPorcion"));

            entity.Property(e => e.Existencias).HasColumnType("decimal(18, 0)");
            entity.Property(e => e.Nombre)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.PrecioUnitario).HasColumnType("money");
            entity.Property(e => e.UnidadMedida)
                .HasMaxLength(10)
                .IsUnicode(false);
        });

        modelBuilder.Entity<MetodoPago>(entity =>
        {
            entity.HasKey(e => e.IdMetodopago).HasName("PK__MetodoPa__47952DC9EA302BBD");

            entity.ToTable("MetodoPago");

            entity.Property(e => e.IdMetodopago).HasColumnName("id_metodopago");
            entity.Property(e => e.Metodo)
                .HasMaxLength(50)
                .IsUnicode(false);
        });

        modelBuilder.Entity<Orden>(entity =>
        {
            entity.HasKey(e => e.IdOrden);

            entity.ToTable("Orden");

            entity.Property(e => e.NombreCliente)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.PrecioFinal).HasColumnType("money");

            entity.HasOne(d => d.IdEstadoNavigation).WithMany(p => p.Ordens)
                .HasForeignKey(d => d.IdEstado)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_Orden_EstadoOrden");

            entity.HasOne(d => d.IdUsuarioNavigation).WithMany(p => p.Ordens)
                .HasForeignKey(d => d.IdUsuario)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_Orden_Usuario");
        });

        modelBuilder.Entity<PedidoIngrediente>(entity =>
        {
            entity.HasKey(e => e.IdPedido);

            entity.ToTable(tb => tb.HasTrigger("trg_ActualizarExistencias"));

            entity.Property(e => e.PrecioUnitario).HasColumnType("money");

            entity.HasOne(d => d.IdIngredienteNavigation).WithMany(p => p.PedidoIngredientes)
                .HasForeignKey(d => d.IdIngrediente)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_PedidoIngredientes_Ingredientes");
        });

        modelBuilder.Entity<Producto>(entity =>
        {
            entity.HasKey(e => e.IdProducto);

            entity.Property(e => e.Ganancia).HasColumnType("decimal(10, 2)");
            entity.Property(e => e.NombreProducto)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.Precio).HasColumnType("money");

            entity.HasOne(d => d.IdCategoriaNavigation).WithMany(p => p.Productos)
                .HasForeignKey(d => d.IdCategoria)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_Productos_CategoriaProducto");
        });

        modelBuilder.Entity<Receta>(entity =>
        {
            entity.HasKey(e => e.IdReceta);

            entity.ToTable(tb => tb.HasTrigger("trg_UpdateGananciaRiesgo"));

            entity.Property(e => e.CostoTotal).HasColumnType("money");
            entity.Property(e => e.Nombre)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.Porciones).HasColumnType("decimal(18, 0)");

            entity.HasOne(d => d.IdProductoNavigation).WithMany(p => p.Receta)
                .HasForeignKey(d => d.IdProducto)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_Recetas_Productos");
        });

        modelBuilder.Entity<Role>(entity =>
        {
            entity.HasKey(e => e.IdRol);

            entity.Property(e => e.Rol)
                .HasMaxLength(30)
                .IsUnicode(false);
        });

        modelBuilder.Entity<Usuario>(entity =>
        {
            entity.HasKey(e => e.IdUsuario);

            entity.ToTable("Usuario");

            entity.Property(e => e.Apellido)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.Nombre)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.NombreUsuario)
                .HasMaxLength(50)
                .IsUnicode(false);

            entity.HasOne(d => d.IdRolNavigation).WithMany(p => p.Usuarios)
                .HasForeignKey(d => d.IdRol)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_Usuario_Roles");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
