import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { typesUpdateWithoutMove_changelogInput } from './types-update-without-move-changelog.input';
import { Type } from 'class-transformer';
import { typesCreateWithoutMove_changelogInput } from './types-create-without-move-changelog.input';

@InputType()
export class typesUpsertWithoutMove_changelogInput {

    @Field(() => typesUpdateWithoutMove_changelogInput, {nullable:false})
    @Type(() => typesUpdateWithoutMove_changelogInput)
    update!: typesUpdateWithoutMove_changelogInput;

    @Field(() => typesCreateWithoutMove_changelogInput, {nullable:false})
    @Type(() => typesCreateWithoutMove_changelogInput)
    create!: typesCreateWithoutMove_changelogInput;
}
