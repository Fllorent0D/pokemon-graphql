import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { locationsWhereUniqueInput } from './locations-where-unique.input';
import { Type } from 'class-transformer';
import { locationsCreateWithoutLocation_namesInput } from './locations-create-without-location-names.input';

@InputType()
export class locationsCreateOrConnectWithoutLocation_namesInput {

    @Field(() => locationsWhereUniqueInput, {nullable:false})
    @Type(() => locationsWhereUniqueInput)
    where!: locationsWhereUniqueInput;

    @Field(() => locationsCreateWithoutLocation_namesInput, {nullable:false})
    @Type(() => locationsCreateWithoutLocation_namesInput)
    create!: locationsCreateWithoutLocation_namesInput;
}
