import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { egg_group_proseWhereInput } from '../egg-group-prose/egg-group-prose-where.input';

@InputType()
export class Egg_group_proseListRelationFilter {

    @Field(() => egg_group_proseWhereInput, {nullable:true})
    every?: egg_group_proseWhereInput;

    @Field(() => egg_group_proseWhereInput, {nullable:true})
    some?: egg_group_proseWhereInput;

    @Field(() => egg_group_proseWhereInput, {nullable:true})
    none?: egg_group_proseWhereInput;
}
