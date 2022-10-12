import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { regionsWhereUniqueInput } from './regions-where-unique.input';
import { Type } from 'class-transformer';
import { regionsCreateWithoutRegion_namesInput } from './regions-create-without-region-names.input';

@InputType()
export class regionsCreateOrConnectWithoutRegion_namesInput {

    @Field(() => regionsWhereUniqueInput, {nullable:false})
    @Type(() => regionsWhereUniqueInput)
    where!: regionsWhereUniqueInput;

    @Field(() => regionsCreateWithoutRegion_namesInput, {nullable:false})
    @Type(() => regionsCreateWithoutRegion_namesInput)
    create!: regionsCreateWithoutRegion_namesInput;
}
