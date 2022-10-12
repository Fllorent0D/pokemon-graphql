import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { regionsUpdateWithoutRegion_namesInput } from './regions-update-without-region-names.input';
import { Type } from 'class-transformer';
import { regionsCreateWithoutRegion_namesInput } from './regions-create-without-region-names.input';

@InputType()
export class regionsUpsertWithoutRegion_namesInput {

    @Field(() => regionsUpdateWithoutRegion_namesInput, {nullable:false})
    @Type(() => regionsUpdateWithoutRegion_namesInput)
    update!: regionsUpdateWithoutRegion_namesInput;

    @Field(() => regionsCreateWithoutRegion_namesInput, {nullable:false})
    @Type(() => regionsCreateWithoutRegion_namesInput)
    create!: regionsCreateWithoutRegion_namesInput;
}
