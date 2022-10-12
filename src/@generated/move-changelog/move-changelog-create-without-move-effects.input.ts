import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { typesCreateNestedOneWithoutMove_changelogInput } from '../types/types-create-nested-one-without-move-changelog.input';
import { version_groupsCreateNestedOneWithoutMove_changelogInput } from '../version-groups/version-groups-create-nested-one-without-move-changelog.input';
import { movesCreateNestedOneWithoutMove_changelogInput } from '../moves/moves-create-nested-one-without-move-changelog.input';

@InputType()
export class move_changelogCreateWithoutMove_effectsInput {

    @Field(() => Int, {nullable:true})
    effect_chance?: number;

    @Field(() => typesCreateNestedOneWithoutMove_changelogInput, {nullable:true})
    types?: typesCreateNestedOneWithoutMove_changelogInput;

    @Field(() => version_groupsCreateNestedOneWithoutMove_changelogInput, {nullable:false})
    version_groups!: version_groupsCreateNestedOneWithoutMove_changelogInput;

    @Field(() => movesCreateNestedOneWithoutMove_changelogInput, {nullable:false})
    moves!: movesCreateNestedOneWithoutMove_changelogInput;
}
