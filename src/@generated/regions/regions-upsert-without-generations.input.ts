import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { regionsUpdateWithoutGenerationsInput } from './regions-update-without-generations.input';
import { Type } from 'class-transformer';
import { regionsCreateWithoutGenerationsInput } from './regions-create-without-generations.input';

@InputType()
export class regionsUpsertWithoutGenerationsInput {

    @Field(() => regionsUpdateWithoutGenerationsInput, {nullable:false})
    @Type(() => regionsUpdateWithoutGenerationsInput)
    update!: regionsUpdateWithoutGenerationsInput;

    @Field(() => regionsCreateWithoutGenerationsInput, {nullable:false})
    @Type(() => regionsCreateWithoutGenerationsInput)
    create!: regionsCreateWithoutGenerationsInput;
}
