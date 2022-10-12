import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { berry_firmness_namesWhereUniqueInput } from './berry-firmness-names-where-unique.input';
import { Type } from 'class-transformer';
import { berry_firmness_namesUpdateWithoutBerry_firmnessInput } from './berry-firmness-names-update-without-berry-firmness.input';

@InputType()
export class berry_firmness_namesUpdateWithWhereUniqueWithoutBerry_firmnessInput {

    @Field(() => berry_firmness_namesWhereUniqueInput, {nullable:false})
    @Type(() => berry_firmness_namesWhereUniqueInput)
    where!: berry_firmness_namesWhereUniqueInput;

    @Field(() => berry_firmness_namesUpdateWithoutBerry_firmnessInput, {nullable:false})
    @Type(() => berry_firmness_namesUpdateWithoutBerry_firmnessInput)
    data!: berry_firmness_namesUpdateWithoutBerry_firmnessInput;
}
