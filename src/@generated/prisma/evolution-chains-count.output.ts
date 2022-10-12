import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class Evolution_chainsCount {

    @Field(() => Int, {nullable:false})
    pokemon_species!: number;
}
