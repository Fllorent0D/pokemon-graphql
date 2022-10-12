import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesCreateWithoutRegion_namesInput } from './languages-create-without-region-names.input';
import { Type } from 'class-transformer';
import { languagesCreateOrConnectWithoutRegion_namesInput } from './languages-create-or-connect-without-region-names.input';
import { languagesWhereUniqueInput } from './languages-where-unique.input';

@InputType()
export class languagesCreateNestedOneWithoutRegion_namesInput {

    @Field(() => languagesCreateWithoutRegion_namesInput, {nullable:true})
    @Type(() => languagesCreateWithoutRegion_namesInput)
    create?: languagesCreateWithoutRegion_namesInput;

    @Field(() => languagesCreateOrConnectWithoutRegion_namesInput, {nullable:true})
    @Type(() => languagesCreateOrConnectWithoutRegion_namesInput)
    connectOrCreate?: languagesCreateOrConnectWithoutRegion_namesInput;

    @Field(() => languagesWhereUniqueInput, {nullable:true})
    @Type(() => languagesWhereUniqueInput)
    connect?: languagesWhereUniqueInput;
}
