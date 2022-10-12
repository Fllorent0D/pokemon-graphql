import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesWhereUniqueInput } from './languages-where-unique.input';
import { Type } from 'class-transformer';
import { languagesCreateWithoutLocation_area_proseInput } from './languages-create-without-location-area-prose.input';

@InputType()
export class languagesCreateOrConnectWithoutLocation_area_proseInput {

    @Field(() => languagesWhereUniqueInput, {nullable:false})
    @Type(() => languagesWhereUniqueInput)
    where!: languagesWhereUniqueInput;

    @Field(() => languagesCreateWithoutLocation_area_proseInput, {nullable:false})
    @Type(() => languagesCreateWithoutLocation_area_proseInput)
    create!: languagesCreateWithoutLocation_area_proseInput;
}
