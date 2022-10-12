import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { location_namesCreateWithoutLanguagesInput } from './location-names-create-without-languages.input';
import { Type } from 'class-transformer';
import { location_namesCreateOrConnectWithoutLanguagesInput } from './location-names-create-or-connect-without-languages.input';
import { location_namesWhereUniqueInput } from './location-names-where-unique.input';

@InputType()
export class location_namesUncheckedCreateNestedManyWithoutLanguagesInput {

    @Field(() => [location_namesCreateWithoutLanguagesInput], {nullable:true})
    @Type(() => location_namesCreateWithoutLanguagesInput)
    create?: Array<location_namesCreateWithoutLanguagesInput>;

    @Field(() => [location_namesCreateOrConnectWithoutLanguagesInput], {nullable:true})
    @Type(() => location_namesCreateOrConnectWithoutLanguagesInput)
    connectOrCreate?: Array<location_namesCreateOrConnectWithoutLanguagesInput>;

    @Field(() => [location_namesWhereUniqueInput], {nullable:true})
    @Type(() => location_namesWhereUniqueInput)
    connect?: Array<location_namesWhereUniqueInput>;
}
