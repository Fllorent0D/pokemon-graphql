import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { move_effect_changelogWhereInput } from '../move-effect-changelog/move-effect-changelog-where.input';

@InputType()
export class Move_effect_changelogListRelationFilter {

    @Field(() => move_effect_changelogWhereInput, {nullable:true})
    every?: move_effect_changelogWhereInput;

    @Field(() => move_effect_changelogWhereInput, {nullable:true})
    some?: move_effect_changelogWhereInput;

    @Field(() => move_effect_changelogWhereInput, {nullable:true})
    none?: move_effect_changelogWhereInput;
}
