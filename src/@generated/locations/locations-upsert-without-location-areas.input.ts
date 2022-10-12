import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { locationsUpdateWithoutLocation_areasInput } from './locations-update-without-location-areas.input';
import { Type } from 'class-transformer';
import { locationsCreateWithoutLocation_areasInput } from './locations-create-without-location-areas.input';

@InputType()
export class locationsUpsertWithoutLocation_areasInput {

    @Field(() => locationsUpdateWithoutLocation_areasInput, {nullable:false})
    @Type(() => locationsUpdateWithoutLocation_areasInput)
    update!: locationsUpdateWithoutLocation_areasInput;

    @Field(() => locationsCreateWithoutLocation_areasInput, {nullable:false})
    @Type(() => locationsCreateWithoutLocation_areasInput)
    create!: locationsCreateWithoutLocation_areasInput;
}
