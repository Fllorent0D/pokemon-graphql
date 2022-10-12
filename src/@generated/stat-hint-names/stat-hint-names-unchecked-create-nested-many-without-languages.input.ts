import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { stat_hint_namesCreateWithoutLanguagesInput } from './stat-hint-names-create-without-languages.input';
import { Type } from 'class-transformer';
import { stat_hint_namesCreateOrConnectWithoutLanguagesInput } from './stat-hint-names-create-or-connect-without-languages.input';
import { stat_hint_namesWhereUniqueInput } from './stat-hint-names-where-unique.input';

@InputType()
export class stat_hint_namesUncheckedCreateNestedManyWithoutLanguagesInput {

    @Field(() => [stat_hint_namesCreateWithoutLanguagesInput], {nullable:true})
    @Type(() => stat_hint_namesCreateWithoutLanguagesInput)
    create?: Array<stat_hint_namesCreateWithoutLanguagesInput>;

    @Field(() => [stat_hint_namesCreateOrConnectWithoutLanguagesInput], {nullable:true})
    @Type(() => stat_hint_namesCreateOrConnectWithoutLanguagesInput)
    connectOrCreate?: Array<stat_hint_namesCreateOrConnectWithoutLanguagesInput>;

    @Field(() => [stat_hint_namesWhereUniqueInput], {nullable:true})
    @Type(() => stat_hint_namesWhereUniqueInput)
    connect?: Array<stat_hint_namesWhereUniqueInput>;
}
