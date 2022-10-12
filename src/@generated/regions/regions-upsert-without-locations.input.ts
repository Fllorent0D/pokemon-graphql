import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { regionsUpdateWithoutLocationsInput } from './regions-update-without-locations.input';
import { Type } from 'class-transformer';
import { regionsCreateWithoutLocationsInput } from './regions-create-without-locations.input';

@InputType()
export class regionsUpsertWithoutLocationsInput {

    @Field(() => regionsUpdateWithoutLocationsInput, {nullable:false})
    @Type(() => regionsUpdateWithoutLocationsInput)
    update!: regionsUpdateWithoutLocationsInput;

    @Field(() => regionsCreateWithoutLocationsInput, {nullable:false})
    @Type(() => regionsCreateWithoutLocationsInput)
    create!: regionsCreateWithoutLocationsInput;
}
