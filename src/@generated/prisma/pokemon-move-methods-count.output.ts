import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class Pokemon_move_methodsCount {

    @Field(() => Int, {nullable:false})
    pokemon_move_method_prose!: number;
}
