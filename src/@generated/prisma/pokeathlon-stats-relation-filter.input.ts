import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokeathlon_statsWhereInput } from '../pokeathlon-stats/pokeathlon-stats-where.input';

@InputType()
export class Pokeathlon_statsRelationFilter {

    @Field(() => pokeathlon_statsWhereInput, {nullable:true})
    is?: pokeathlon_statsWhereInput;

    @Field(() => pokeathlon_statsWhereInput, {nullable:true})
    isNot?: pokeathlon_statsWhereInput;
}
