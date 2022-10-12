import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { locationsUpdateWithoutLocation_namesInput } from './locations-update-without-location-names.input';
import { Type } from 'class-transformer';
import { locationsCreateWithoutLocation_namesInput } from './locations-create-without-location-names.input';

@InputType()
export class locationsUpsertWithoutLocation_namesInput {

    @Field(() => locationsUpdateWithoutLocation_namesInput, {nullable:false})
    @Type(() => locationsUpdateWithoutLocation_namesInput)
    update!: locationsUpdateWithoutLocation_namesInput;

    @Field(() => locationsCreateWithoutLocation_namesInput, {nullable:false})
    @Type(() => locationsCreateWithoutLocation_namesInput)
    create!: locationsCreateWithoutLocation_namesInput;
}
