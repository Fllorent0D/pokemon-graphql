import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { typesUpdateWithoutBerriesInput } from './types-update-without-berries.input';
import { Type } from 'class-transformer';
import { typesCreateWithoutBerriesInput } from './types-create-without-berries.input';

@InputType()
export class typesUpsertWithoutBerriesInput {

    @Field(() => typesUpdateWithoutBerriesInput, {nullable:false})
    @Type(() => typesUpdateWithoutBerriesInput)
    update!: typesUpdateWithoutBerriesInput;

    @Field(() => typesCreateWithoutBerriesInput, {nullable:false})
    @Type(() => typesCreateWithoutBerriesInput)
    create!: typesCreateWithoutBerriesInput;
}
