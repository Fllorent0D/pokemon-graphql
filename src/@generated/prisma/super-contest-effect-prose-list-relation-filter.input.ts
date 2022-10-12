import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { super_contest_effect_proseWhereInput } from '../super-contest-effect-prose/super-contest-effect-prose-where.input';

@InputType()
export class Super_contest_effect_proseListRelationFilter {

    @Field(() => super_contest_effect_proseWhereInput, {nullable:true})
    every?: super_contest_effect_proseWhereInput;

    @Field(() => super_contest_effect_proseWhereInput, {nullable:true})
    some?: super_contest_effect_proseWhereInput;

    @Field(() => super_contest_effect_proseWhereInput, {nullable:true})
    none?: super_contest_effect_proseWhereInput;
}
