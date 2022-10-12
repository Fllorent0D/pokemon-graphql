import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ability_proseWhereInput } from '../ability-prose/ability-prose-where.input';

@InputType()
export class Ability_proseListRelationFilter {

    @Field(() => ability_proseWhereInput, {nullable:true})
    every?: ability_proseWhereInput;

    @Field(() => ability_proseWhereInput, {nullable:true})
    some?: ability_proseWhereInput;

    @Field(() => ability_proseWhereInput, {nullable:true})
    none?: ability_proseWhereInput;
}
