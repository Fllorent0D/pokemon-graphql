import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesWhereUniqueInput } from './languages-where-unique.input';
import { Type } from 'class-transformer';
import { languagesCreateWithoutRegion_namesInput } from './languages-create-without-region-names.input';

@InputType()
export class languagesCreateOrConnectWithoutRegion_namesInput {

    @Field(() => languagesWhereUniqueInput, {nullable:false})
    @Type(() => languagesWhereUniqueInput)
    where!: languagesWhereUniqueInput;

    @Field(() => languagesCreateWithoutRegion_namesInput, {nullable:false})
    @Type(() => languagesCreateWithoutRegion_namesInput)
    create!: languagesCreateWithoutRegion_namesInput;
}
