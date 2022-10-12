import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesCreateWithoutLocation_area_proseInput } from './languages-create-without-location-area-prose.input';
import { Type } from 'class-transformer';
import { languagesCreateOrConnectWithoutLocation_area_proseInput } from './languages-create-or-connect-without-location-area-prose.input';
import { languagesWhereUniqueInput } from './languages-where-unique.input';

@InputType()
export class languagesCreateNestedOneWithoutLocation_area_proseInput {

    @Field(() => languagesCreateWithoutLocation_area_proseInput, {nullable:true})
    @Type(() => languagesCreateWithoutLocation_area_proseInput)
    create?: languagesCreateWithoutLocation_area_proseInput;

    @Field(() => languagesCreateOrConnectWithoutLocation_area_proseInput, {nullable:true})
    @Type(() => languagesCreateOrConnectWithoutLocation_area_proseInput)
    connectOrCreate?: languagesCreateOrConnectWithoutLocation_area_proseInput;

    @Field(() => languagesWhereUniqueInput, {nullable:true})
    @Type(() => languagesWhereUniqueInput)
    connect?: languagesWhereUniqueInput;
}
