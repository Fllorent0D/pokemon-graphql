import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { stat_namesWhereInput } from '../stat-names/stat-names-where.input';

@InputType()
export class Stat_namesListRelationFilter {

    @Field(() => stat_namesWhereInput, {nullable:true})
    every?: stat_namesWhereInput;

    @Field(() => stat_namesWhereInput, {nullable:true})
    some?: stat_namesWhereInput;

    @Field(() => stat_namesWhereInput, {nullable:true})
    none?: stat_namesWhereInput;
}
