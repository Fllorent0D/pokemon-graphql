import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { typesUpdateWithoutType_namesInput } from './types-update-without-type-names.input';
import { Type } from 'class-transformer';
import { typesCreateWithoutType_namesInput } from './types-create-without-type-names.input';

@InputType()
export class typesUpsertWithoutType_namesInput {

    @Field(() => typesUpdateWithoutType_namesInput, {nullable:false})
    @Type(() => typesUpdateWithoutType_namesInput)
    update!: typesUpdateWithoutType_namesInput;

    @Field(() => typesCreateWithoutType_namesInput, {nullable:false})
    @Type(() => typesCreateWithoutType_namesInput)
    create!: typesCreateWithoutType_namesInput;
}
