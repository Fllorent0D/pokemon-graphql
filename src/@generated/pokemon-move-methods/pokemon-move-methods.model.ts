import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { pokemon_move_method_prose } from '../pokemon-move-method-prose/pokemon-move-method-prose.model';
import { Pokemon_move_methodsCount } from '../prisma/pokemon-move-methods-count.output';

@ObjectType()
export class pokemon_move_methods {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => [pokemon_move_method_prose], {nullable:true})
    pokemon_move_method_prose?: Array<pokemon_move_method_prose>;

    @Field(() => Pokemon_move_methodsCount, {nullable:false})
    _count?: Pokemon_move_methodsCount;
}
