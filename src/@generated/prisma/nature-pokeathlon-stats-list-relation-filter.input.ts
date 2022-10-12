import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { nature_pokeathlon_statsWhereInput } from '../nature-pokeathlon-stats/nature-pokeathlon-stats-where.input';

@InputType()
export class Nature_pokeathlon_statsListRelationFilter {

    @Field(() => nature_pokeathlon_statsWhereInput, {nullable:true})
    every?: nature_pokeathlon_statsWhereInput;

    @Field(() => nature_pokeathlon_statsWhereInput, {nullable:true})
    some?: nature_pokeathlon_statsWhereInput;

    @Field(() => nature_pokeathlon_statsWhereInput, {nullable:true})
    none?: nature_pokeathlon_statsWhereInput;
}
