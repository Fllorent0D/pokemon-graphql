import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { move_flavor_textCreateWithoutLanguagesInput } from './move-flavor-text-create-without-languages.input';
import { Type } from 'class-transformer';
import { move_flavor_textCreateOrConnectWithoutLanguagesInput } from './move-flavor-text-create-or-connect-without-languages.input';
import { move_flavor_textWhereUniqueInput } from './move-flavor-text-where-unique.input';

@InputType()
export class move_flavor_textUncheckedCreateNestedManyWithoutLanguagesInput {

    @Field(() => [move_flavor_textCreateWithoutLanguagesInput], {nullable:true})
    @Type(() => move_flavor_textCreateWithoutLanguagesInput)
    create?: Array<move_flavor_textCreateWithoutLanguagesInput>;

    @Field(() => [move_flavor_textCreateOrConnectWithoutLanguagesInput], {nullable:true})
    @Type(() => move_flavor_textCreateOrConnectWithoutLanguagesInput)
    connectOrCreate?: Array<move_flavor_textCreateOrConnectWithoutLanguagesInput>;

    @Field(() => [move_flavor_textWhereUniqueInput], {nullable:true})
    @Type(() => move_flavor_textWhereUniqueInput)
    connect?: Array<move_flavor_textWhereUniqueInput>;
}
