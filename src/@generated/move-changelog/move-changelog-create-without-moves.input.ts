import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { move_effectsCreateNestedOneWithoutMove_changelogInput } from '../move-effects/move-effects-create-nested-one-without-move-changelog.input';
import { typesCreateNestedOneWithoutMove_changelogInput } from '../types/types-create-nested-one-without-move-changelog.input';
import { version_groupsCreateNestedOneWithoutMove_changelogInput } from '../version-groups/version-groups-create-nested-one-without-move-changelog.input';

@InputType()
export class move_changelogCreateWithoutMovesInput {

    @Field(() => Int, {nullable:true})
    effect_chance?: number;

    @Field(() => move_effectsCreateNestedOneWithoutMove_changelogInput, {nullable:true})
    move_effects?: move_effectsCreateNestedOneWithoutMove_changelogInput;

    @Field(() => typesCreateNestedOneWithoutMove_changelogInput, {nullable:true})
    types?: typesCreateNestedOneWithoutMove_changelogInput;

    @Field(() => version_groupsCreateNestedOneWithoutMove_changelogInput, {nullable:false})
    version_groups!: version_groupsCreateNestedOneWithoutMove_changelogInput;
}
