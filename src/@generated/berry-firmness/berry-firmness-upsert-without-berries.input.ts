import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { berry_firmnessUpdateWithoutBerriesInput } from './berry-firmness-update-without-berries.input';
import { Type } from 'class-transformer';
import { berry_firmnessCreateWithoutBerriesInput } from './berry-firmness-create-without-berries.input';

@InputType()
export class berry_firmnessUpsertWithoutBerriesInput {

    @Field(() => berry_firmnessUpdateWithoutBerriesInput, {nullable:false})
    @Type(() => berry_firmnessUpdateWithoutBerriesInput)
    update!: berry_firmnessUpdateWithoutBerriesInput;

    @Field(() => berry_firmnessCreateWithoutBerriesInput, {nullable:false})
    @Type(() => berry_firmnessCreateWithoutBerriesInput)
    create!: berry_firmnessCreateWithoutBerriesInput;
}
