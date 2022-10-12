import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { move_changelogWhereUniqueInput } from './move-changelog-where-unique.input';
import { Type } from 'class-transformer';
import { move_changelogUpdateWithoutTypesInput } from './move-changelog-update-without-types.input';
import { move_changelogCreateWithoutTypesInput } from './move-changelog-create-without-types.input';

@InputType()
export class move_changelogUpsertWithWhereUniqueWithoutTypesInput {

    @Field(() => move_changelogWhereUniqueInput, {nullable:false})
    @Type(() => move_changelogWhereUniqueInput)
    where!: move_changelogWhereUniqueInput;

    @Field(() => move_changelogUpdateWithoutTypesInput, {nullable:false})
    @Type(() => move_changelogUpdateWithoutTypesInput)
    update!: move_changelogUpdateWithoutTypesInput;

    @Field(() => move_changelogCreateWithoutTypesInput, {nullable:false})
    @Type(() => move_changelogCreateWithoutTypesInput)
    create!: move_changelogCreateWithoutTypesInput;
}
