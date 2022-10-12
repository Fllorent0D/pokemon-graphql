import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { contest_effect_proseWhereInput } from '../contest-effect-prose/contest-effect-prose-where.input';

@InputType()
export class Contest_effect_proseListRelationFilter {

    @Field(() => contest_effect_proseWhereInput, {nullable:true})
    every?: contest_effect_proseWhereInput;

    @Field(() => contest_effect_proseWhereInput, {nullable:true})
    some?: contest_effect_proseWhereInput;

    @Field(() => contest_effect_proseWhereInput, {nullable:true})
    none?: contest_effect_proseWhereInput;
}
