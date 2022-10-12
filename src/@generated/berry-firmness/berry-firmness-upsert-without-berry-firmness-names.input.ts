import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { berry_firmnessUpdateWithoutBerry_firmness_namesInput } from './berry-firmness-update-without-berry-firmness-names.input';
import { Type } from 'class-transformer';
import { berry_firmnessCreateWithoutBerry_firmness_namesInput } from './berry-firmness-create-without-berry-firmness-names.input';

@InputType()
export class berry_firmnessUpsertWithoutBerry_firmness_namesInput {

    @Field(() => berry_firmnessUpdateWithoutBerry_firmness_namesInput, {nullable:false})
    @Type(() => berry_firmnessUpdateWithoutBerry_firmness_namesInput)
    update!: berry_firmnessUpdateWithoutBerry_firmness_namesInput;

    @Field(() => berry_firmnessCreateWithoutBerry_firmness_namesInput, {nullable:false})
    @Type(() => berry_firmnessCreateWithoutBerry_firmness_namesInput)
    create!: berry_firmnessCreateWithoutBerry_firmness_namesInput;
}
