import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesCreateWithoutLocation_area_proseInput } from './languages-create-without-location-area-prose.input';
import { Type } from 'class-transformer';
import { languagesCreateOrConnectWithoutLocation_area_proseInput } from './languages-create-or-connect-without-location-area-prose.input';
import { languagesUpsertWithoutLocation_area_proseInput } from './languages-upsert-without-location-area-prose.input';
import { languagesWhereUniqueInput } from './languages-where-unique.input';
import { languagesUpdateWithoutLocation_area_proseInput } from './languages-update-without-location-area-prose.input';

@InputType()
export class languagesUpdateOneRequiredWithoutLocation_area_proseNestedInput {

    @Field(() => languagesCreateWithoutLocation_area_proseInput, {nullable:true})
    @Type(() => languagesCreateWithoutLocation_area_proseInput)
    create?: languagesCreateWithoutLocation_area_proseInput;

    @Field(() => languagesCreateOrConnectWithoutLocation_area_proseInput, {nullable:true})
    @Type(() => languagesCreateOrConnectWithoutLocation_area_proseInput)
    connectOrCreate?: languagesCreateOrConnectWithoutLocation_area_proseInput;

    @Field(() => languagesUpsertWithoutLocation_area_proseInput, {nullable:true})
    @Type(() => languagesUpsertWithoutLocation_area_proseInput)
    upsert?: languagesUpsertWithoutLocation_area_proseInput;

    @Field(() => languagesWhereUniqueInput, {nullable:true})
    @Type(() => languagesWhereUniqueInput)
    connect?: languagesWhereUniqueInput;

    @Field(() => languagesUpdateWithoutLocation_area_proseInput, {nullable:true})
    @Type(() => languagesUpdateWithoutLocation_area_proseInput)
    update?: languagesUpdateWithoutLocation_area_proseInput;
}
