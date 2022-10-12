import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { move_changelogWhereUniqueInput } from './move-changelog-where-unique.input';
import { Type } from 'class-transformer';
import { move_changelogUpdateWithoutTypesInput } from './move-changelog-update-without-types.input';

@InputType()
export class move_changelogUpdateWithWhereUniqueWithoutTypesInput {

    @Field(() => move_changelogWhereUniqueInput, {nullable:false})
    @Type(() => move_changelogWhereUniqueInput)
    where!: move_changelogWhereUniqueInput;

    @Field(() => move_changelogUpdateWithoutTypesInput, {nullable:false})
    @Type(() => move_changelogUpdateWithoutTypesInput)
    data!: move_changelogUpdateWithoutTypesInput;
}
