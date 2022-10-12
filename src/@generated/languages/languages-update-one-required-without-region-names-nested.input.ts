import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesCreateWithoutRegion_namesInput } from './languages-create-without-region-names.input';
import { Type } from 'class-transformer';
import { languagesCreateOrConnectWithoutRegion_namesInput } from './languages-create-or-connect-without-region-names.input';
import { languagesUpsertWithoutRegion_namesInput } from './languages-upsert-without-region-names.input';
import { languagesWhereUniqueInput } from './languages-where-unique.input';
import { languagesUpdateWithoutRegion_namesInput } from './languages-update-without-region-names.input';

@InputType()
export class languagesUpdateOneRequiredWithoutRegion_namesNestedInput {

    @Field(() => languagesCreateWithoutRegion_namesInput, {nullable:true})
    @Type(() => languagesCreateWithoutRegion_namesInput)
    create?: languagesCreateWithoutRegion_namesInput;

    @Field(() => languagesCreateOrConnectWithoutRegion_namesInput, {nullable:true})
    @Type(() => languagesCreateOrConnectWithoutRegion_namesInput)
    connectOrCreate?: languagesCreateOrConnectWithoutRegion_namesInput;

    @Field(() => languagesUpsertWithoutRegion_namesInput, {nullable:true})
    @Type(() => languagesUpsertWithoutRegion_namesInput)
    upsert?: languagesUpsertWithoutRegion_namesInput;

    @Field(() => languagesWhereUniqueInput, {nullable:true})
    @Type(() => languagesWhereUniqueInput)
    connect?: languagesWhereUniqueInput;

    @Field(() => languagesUpdateWithoutRegion_namesInput, {nullable:true})
    @Type(() => languagesUpdateWithoutRegion_namesInput)
    update?: languagesUpdateWithoutRegion_namesInput;
}
