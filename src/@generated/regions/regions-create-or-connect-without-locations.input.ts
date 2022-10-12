import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { regionsWhereUniqueInput } from './regions-where-unique.input';
import { Type } from 'class-transformer';
import { regionsCreateWithoutLocationsInput } from './regions-create-without-locations.input';

@InputType()
export class regionsCreateOrConnectWithoutLocationsInput {

    @Field(() => regionsWhereUniqueInput, {nullable:false})
    @Type(() => regionsWhereUniqueInput)
    where!: regionsWhereUniqueInput;

    @Field(() => regionsCreateWithoutLocationsInput, {nullable:false})
    @Type(() => regionsCreateWithoutLocationsInput)
    create!: regionsCreateWithoutLocationsInput;
}
