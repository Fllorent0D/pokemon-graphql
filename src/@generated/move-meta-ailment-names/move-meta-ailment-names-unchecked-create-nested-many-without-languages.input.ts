import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { move_meta_ailment_namesCreateWithoutLanguagesInput } from './move-meta-ailment-names-create-without-languages.input';
import { Type } from 'class-transformer';
import { move_meta_ailment_namesCreateOrConnectWithoutLanguagesInput } from './move-meta-ailment-names-create-or-connect-without-languages.input';
import { move_meta_ailment_namesWhereUniqueInput } from './move-meta-ailment-names-where-unique.input';

@InputType()
export class move_meta_ailment_namesUncheckedCreateNestedManyWithoutLanguagesInput {

    @Field(() => [move_meta_ailment_namesCreateWithoutLanguagesInput], {nullable:true})
    @Type(() => move_meta_ailment_namesCreateWithoutLanguagesInput)
    create?: Array<move_meta_ailment_namesCreateWithoutLanguagesInput>;

    @Field(() => [move_meta_ailment_namesCreateOrConnectWithoutLanguagesInput], {nullable:true})
    @Type(() => move_meta_ailment_namesCreateOrConnectWithoutLanguagesInput)
    connectOrCreate?: Array<move_meta_ailment_namesCreateOrConnectWithoutLanguagesInput>;

    @Field(() => [move_meta_ailment_namesWhereUniqueInput], {nullable:true})
    @Type(() => move_meta_ailment_namesWhereUniqueInput)
    connect?: Array<move_meta_ailment_namesWhereUniqueInput>;
}
