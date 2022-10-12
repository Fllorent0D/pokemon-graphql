import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { locationsWhereUniqueInput } from './locations-where-unique.input';
import { Type } from 'class-transformer';
import { locationsCreateWithoutLocation_areasInput } from './locations-create-without-location-areas.input';

@InputType()
export class locationsCreateOrConnectWithoutLocation_areasInput {

    @Field(() => locationsWhereUniqueInput, {nullable:false})
    @Type(() => locationsWhereUniqueInput)
    where!: locationsWhereUniqueInput;

    @Field(() => locationsCreateWithoutLocation_areasInput, {nullable:false})
    @Type(() => locationsCreateWithoutLocation_areasInput)
    create!: locationsCreateWithoutLocation_areasInput;
}
