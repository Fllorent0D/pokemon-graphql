import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { berry_firmness_namesWhereUniqueInput } from './berry-firmness-names-where-unique.input';
import { Type } from 'class-transformer';
import { berry_firmness_namesUpdateWithoutBerry_firmnessInput } from './berry-firmness-names-update-without-berry-firmness.input';
import { berry_firmness_namesCreateWithoutBerry_firmnessInput } from './berry-firmness-names-create-without-berry-firmness.input';

@InputType()
export class berry_firmness_namesUpsertWithWhereUniqueWithoutBerry_firmnessInput {

    @Field(() => berry_firmness_namesWhereUniqueInput, {nullable:false})
    @Type(() => berry_firmness_namesWhereUniqueInput)
    where!: berry_firmness_namesWhereUniqueInput;

    @Field(() => berry_firmness_namesUpdateWithoutBerry_firmnessInput, {nullable:false})
    @Type(() => berry_firmness_namesUpdateWithoutBerry_firmnessInput)
    update!: berry_firmness_namesUpdateWithoutBerry_firmnessInput;

    @Field(() => berry_firmness_namesCreateWithoutBerry_firmnessInput, {nullable:false})
    @Type(() => berry_firmness_namesCreateWithoutBerry_firmnessInput)
    create!: berry_firmness_namesCreateWithoutBerry_firmnessInput;
}
