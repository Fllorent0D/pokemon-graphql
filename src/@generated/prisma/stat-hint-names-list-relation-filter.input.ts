import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { stat_hint_namesWhereInput } from '../stat-hint-names/stat-hint-names-where.input';

@InputType()
export class Stat_hint_namesListRelationFilter {

    @Field(() => stat_hint_namesWhereInput, {nullable:true})
    every?: stat_hint_namesWhereInput;

    @Field(() => stat_hint_namesWhereInput, {nullable:true})
    some?: stat_hint_namesWhereInput;

    @Field(() => stat_hint_namesWhereInput, {nullable:true})
    none?: stat_hint_namesWhereInput;
}
