import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { locationsWhereUniqueInput } from './locations-where-unique.input';
import { Type } from 'class-transformer';
import { locationsUpdateWithoutRegionsInput } from './locations-update-without-regions.input';
import { locationsCreateWithoutRegionsInput } from './locations-create-without-regions.input';

@InputType()
export class locationsUpsertWithWhereUniqueWithoutRegionsInput {

    @Field(() => locationsWhereUniqueInput, {nullable:false})
    @Type(() => locationsWhereUniqueInput)
    where!: locationsWhereUniqueInput;

    @Field(() => locationsUpdateWithoutRegionsInput, {nullable:false})
    @Type(() => locationsUpdateWithoutRegionsInput)
    update!: locationsUpdateWithoutRegionsInput;

    @Field(() => locationsCreateWithoutRegionsInput, {nullable:false})
    @Type(() => locationsCreateWithoutRegionsInput)
    create!: locationsCreateWithoutRegionsInput;
}
