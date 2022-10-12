import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { move_effect_changelogWhereInput } from '../move-effect-changelog/move-effect-changelog-where.input';

@InputType()
export class Move_effect_changelogRelationFilter {

    @Field(() => move_effect_changelogWhereInput, {nullable:true})
    is?: move_effect_changelogWhereInput;

    @Field(() => move_effect_changelogWhereInput, {nullable:true})
    isNot?: move_effect_changelogWhereInput;
}
