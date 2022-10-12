import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { berry_firmnessWhereUniqueInput } from './berry-firmness-where-unique.input';
import { Type } from 'class-transformer';
import { berry_firmnessCreateWithoutBerry_firmness_namesInput } from './berry-firmness-create-without-berry-firmness-names.input';

@InputType()
export class berry_firmnessCreateOrConnectWithoutBerry_firmness_namesInput {

    @Field(() => berry_firmnessWhereUniqueInput, {nullable:false})
    @Type(() => berry_firmnessWhereUniqueInput)
    where!: berry_firmnessWhereUniqueInput;

    @Field(() => berry_firmnessCreateWithoutBerry_firmness_namesInput, {nullable:false})
    @Type(() => berry_firmnessCreateWithoutBerry_firmness_namesInput)
    create!: berry_firmnessCreateWithoutBerry_firmness_namesInput;
}
