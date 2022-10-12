import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokeathlon_stat_namesWhereInput } from '../pokeathlon-stat-names/pokeathlon-stat-names-where.input';

@InputType()
export class Pokeathlon_stat_namesListRelationFilter {

    @Field(() => pokeathlon_stat_namesWhereInput, {nullable:true})
    every?: pokeathlon_stat_namesWhereInput;

    @Field(() => pokeathlon_stat_namesWhereInput, {nullable:true})
    some?: pokeathlon_stat_namesWhereInput;

    @Field(() => pokeathlon_stat_namesWhereInput, {nullable:true})
    none?: pokeathlon_stat_namesWhereInput;
}
