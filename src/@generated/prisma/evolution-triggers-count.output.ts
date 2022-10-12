import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class Evolution_triggersCount {

    @Field(() => Int, {nullable:false})
    evolution_trigger_prose!: number;

    @Field(() => Int, {nullable:false})
    pokemon_evolution!: number;
}
