import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesCreateWithoutBerry_firmness_namesInput } from './languages-create-without-berry-firmness-names.input';
import { Type } from 'class-transformer';
import { languagesCreateOrConnectWithoutBerry_firmness_namesInput } from './languages-create-or-connect-without-berry-firmness-names.input';
import { languagesWhereUniqueInput } from './languages-where-unique.input';

@InputType()
export class languagesCreateNestedOneWithoutBerry_firmness_namesInput {

    @Field(() => languagesCreateWithoutBerry_firmness_namesInput, {nullable:true})
    @Type(() => languagesCreateWithoutBerry_firmness_namesInput)
    create?: languagesCreateWithoutBerry_firmness_namesInput;

    @Field(() => languagesCreateOrConnectWithoutBerry_firmness_namesInput, {nullable:true})
    @Type(() => languagesCreateOrConnectWithoutBerry_firmness_namesInput)
    connectOrCreate?: languagesCreateOrConnectWithoutBerry_firmness_namesInput;

    @Field(() => languagesWhereUniqueInput, {nullable:true})
    @Type(() => languagesWhereUniqueInput)
    connect?: languagesWhereUniqueInput;
}
