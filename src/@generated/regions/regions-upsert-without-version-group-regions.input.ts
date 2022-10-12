import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { regionsUpdateWithoutVersion_group_regionsInput } from './regions-update-without-version-group-regions.input';
import { Type } from 'class-transformer';
import { regionsCreateWithoutVersion_group_regionsInput } from './regions-create-without-version-group-regions.input';

@InputType()
export class regionsUpsertWithoutVersion_group_regionsInput {

    @Field(() => regionsUpdateWithoutVersion_group_regionsInput, {nullable:false})
    @Type(() => regionsUpdateWithoutVersion_group_regionsInput)
    update!: regionsUpdateWithoutVersion_group_regionsInput;

    @Field(() => regionsCreateWithoutVersion_group_regionsInput, {nullable:false})
    @Type(() => regionsCreateWithoutVersion_group_regionsInput)
    create!: regionsCreateWithoutVersion_group_regionsInput;
}
