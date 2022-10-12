import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { locationsWhereUniqueInput } from './locations-where-unique.input';
import { Type } from 'class-transformer';
import { locationsUpdateWithoutRegionsInput } from './locations-update-without-regions.input';

@InputType()
export class locationsUpdateWithWhereUniqueWithoutRegionsInput {

    @Field(() => locationsWhereUniqueInput, {nullable:false})
    @Type(() => locationsWhereUniqueInput)
    where!: locationsWhereUniqueInput;

    @Field(() => locationsUpdateWithoutRegionsInput, {nullable:false})
    @Type(() => locationsUpdateWithoutRegionsInput)
    data!: locationsUpdateWithoutRegionsInput;
}
