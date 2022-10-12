import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { pokemon_shape_prose } from '../pokemon-shape-prose/pokemon-shape-prose.model';
import { pokemon_species } from '../pokemon-species/pokemon-species.model';
import { Pokemon_shapesCount } from '../prisma/pokemon-shapes-count.output';

@ObjectType()
export class pokemon_shapes {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => [pokemon_shape_prose], {nullable:true})
    pokemon_shape_prose?: Array<pokemon_shape_prose>;

    @Field(() => [pokemon_species], {nullable:true})
    pokemon_species?: Array<pokemon_species>;

    @Field(() => Pokemon_shapesCount, {nullable:false})
    _count?: Pokemon_shapesCount;
}
