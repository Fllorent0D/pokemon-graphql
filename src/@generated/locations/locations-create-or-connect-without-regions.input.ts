import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { locationsWhereUniqueInput } from './locations-where-unique.input';
import { Type } from 'class-transformer';
import { locationsCreateWithoutRegionsInput } from './locations-create-without-regions.input';

@InputType()
export class locationsCreateOrConnectWithoutRegionsInput {

    @Field(() => locationsWhereUniqueInput, {nullable:false})
    @Type(() => locationsWhereUniqueInput)
    where!: locationsWhereUniqueInput;

    @Field(() => locationsCreateWithoutRegionsInput, {nullable:false})
    @Type(() => locationsCreateWithoutRegionsInput)
    create!: locationsCreateWithoutRegionsInput;
}
